import { AbstractCard } from "../NativeClassWrap/AbstractCard.js";
import { AbstractDungeon } from "../NativeClassWrap/AbstractDungeon.js";
import { AbstractGameAction, NewGameActionVFuncType } from "../NativeClassWrap/AbstractGameAction.js"
import { CardGroup } from "../NativeClassWrap/CardGroup.js";
import { HandCardSelectScreen } from "../NativeClassWrap/HandCardSelectScreen.js";
import { Random } from "../NativeClassWrap/Random.js";
import { NativeSTDLib } from "../NativeFuncWrap/NativeSTDLib.js";

const vfuncs: NewGameActionVFuncType = {
    update: (thisPtr: NativePointer) => {
        let wrapAction = new AbstractGameAction(thisPtr);
        const dungeonInstance = AbstractDungeon.getInstance();
        const currentPlayer = dungeonInstance.player;
        const playerHand = currentPlayer.hand;
        if (playerHand.size() <= 0) {
            wrapAction.isDone = true;
            return;
        }

        const selectScreen = new HandCardSelectScreen(dungeonInstance.handCardSelectScreen);
        if (Math.abs(wrapAction.duration - 0.1) <= 1e-5) {
            selectScreen.open2("进行突变。", 1, false, false);
            wrapAction.tickDuration();
            return;
        }

        if (!selectScreen.wereCardsRetrieved) {
            const selectCards = new CardGroup(selectScreen.selectedCards);
            if (selectCards.size() != 1) {
                wrapAction.isDone = true;
                return;
            }
            const selectCard = NativeSTDLib.ArrayList.AbstractCard.get(selectCards.group, 0);
            const wrapCard = new AbstractCard(selectCard);
            selectCards.clear();
            selectScreen.wereCardsRetrieved = true;

            const eventRng = new Random(AbstractDungeon.getInstance().eventRng);
            if (wrapCard.cost >= 0) {
                wrapCard.upgradeBaseCost(eventRng.randomI32_2(0, 3));
            }
            if (wrapCard.baseDamage >= 0) {
                wrapCard.upgradeDamage(eventRng.randomI32_2(wrapCard.baseDamage, wrapCard.baseDamage * 3));
            }
            if (wrapCard.baseBlock >= 0) {
                wrapCard.upgradeBlock(eventRng.randomI32_2(wrapCard.baseBlock, wrapCard.baseBlock * 3));
            }
            if (wrapCard.baseMagicNumber >= 0) {
                wrapCard.upgradeMagicNumber(eventRng.randomI32_2(wrapCard.baseMagicNumber, wrapCard.baseMagicNumber * 3));
            }

            playerHand.addToHand(selectCard);
            wrapCard.flash();
        }

        wrapAction.isDone = true;
    }
};

export const MutationPotionAction = () => {
    const actionObj = AbstractGameAction.NewActionCtor(vfuncs);
    const wrapAction = new AbstractGameAction(actionObj);

    wrapAction.duration = 0.1;
    return actionObj;
}