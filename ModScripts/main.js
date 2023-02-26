'use strict';

//struct ../STSHeads/STSTypes.h  AbstractCard
//only work in ARMV7a(point type size is 4*sizeof(char))

class AbstractCard {
    #rawPtr = null;
    //NativePointer AbstractCard *
    constructor(CthisPtr) {
        if (!(CthisPtr instanceof NativePointer)) {
            throw "need a NativePointer";
        }
        this.#rawPtr = CthisPtr;
    }

    get type() {
        return this.#rawPtr.add(0x8).readU32();
    }
    set type(type) {
        this.#rawPtr.add(0x8).writeU32(type);
    }

    get cost() {
        return this.#rawPtr.add(0xc).readS32();
    }
    set cost(cost) {
        this.#rawPtr.add(0xc).writeS32(cost);
    }

    get costForTurn() {
        return this.#rawPtr.add(0x10).readS32();
    }
    set costForTurn(costForTurn) {
        this.#rawPtr.add(0x10).writeS32(costForTurn);
    }

    get price() {
        return this.#rawPtr.add(0x14).readS32();
    }
    set price(price) {
        this.#rawPtr.add(0x14).writeS32(price);
    }

    get chargeCost() {
        return this.#rawPtr.add(0x18).readS32();
    }
    set chargeCost(chargeCost) {
        this.#rawPtr.add(0x18).writeS32(chargeCost);
    }

    get isCostModified() {
        return this.#rawPtr.add(0x1c).readU8();
    }
    set isCostModified(isCostModified) {
        this.#rawPtr.add(0x1c).writeU8(isCostModified);
    }

    get isCostModifiedForTurn() {
        return this.#rawPtr.add(0x1d).readU8();
    }
    set isCostModifiedForTurn(isCostModifiedForTurn) {
        this.#rawPtr.add(0x1d).writeU8(isCostModifiedForTurn);
    }

    get retain() {
        return this.#rawPtr.add(0x1e).readU8();
    }
    set retain(retain) {
        this.#rawPtr.add(0x1e).writeU8(retain);
    }

    get selfRetain() {
        return this.#rawPtr.add(0x1f).readU8();
    }
    set selfRetain(selfRetain) {
        this.#rawPtr.add(0x1f).writeU8(selfRetain);
    }

    get dontTriggerOnUseCard() {
        return this.#rawPtr.add(0x20).readU8();
    }
    set dontTriggerOnUseCard(dontTriggerOnUseCard) {
        this.#rawPtr.add(0x20).writeU8(dontTriggerOnUseCard);
    }

    get rarity() {
        return this.#rawPtr.add(0x24).readU32();
    }
    set rarity(rarity) {
        this.#rawPtr.add(0x24).writeU32(rarity);
    }

    get color() {
        return this.#rawPtr.add(0x28).readU32();
    }
    set color(color) {
        this.#rawPtr.add(0x28).writeU32(color);
    }

    get isInnate() {
        return this.#rawPtr.add(0x2c).readU8();
    }
    set isInnate(isInnate) {
        this.#rawPtr.add(0x2c).writeU8(isInnate);
    }

    get isLocked() {
        return this.#rawPtr.add(0x2d).readU8();
    }
    set isLocked(isLocked) {
        this.#rawPtr.add(0x2d).writeU8(isLocked);
    }

    get showEvokeValue() {
        return this.#rawPtr.add(0x2e).readU8();
    }
    set showEvokeValue(showEvokeValue) {
        this.#rawPtr.add(0x2e).writeU8(showEvokeValue);
    }

    get showEvokeOrbCount() {
        return this.#rawPtr.add(0x30).readS32();
    }
    set showEvokeOrbCount(showEvokeOrbCount) {
        this.#rawPtr.add(0x30).writeS32(showEvokeOrbCount);
    }

    get isUsed() {
        return this.#rawPtr.add(0x38).readU8();
    }
    set isUsed(isUsed) {
        this.#rawPtr.add(0x38).writeU8(isUsed);
    }

    get upgraded() {
        return this.#rawPtr.add(0x39).readU8();
    }
    set upgraded(upgraded) {
        this.#rawPtr.add(0x39).writeU8(upgraded);
    }

    get timesUpgraded() {
        return this.#rawPtr.add(0x3c).readS32();
    }
    set timesUpgraded(timesUpgraded) {
        this.#rawPtr.add(0x3c).writeS32(timesUpgraded);
    }

    get misc() {
        return this.#rawPtr.add(0x40).readS32();
    }
    set misc(misc) {
        this.#rawPtr.add(0x40).writeS32(misc);
    }

    get energyOnUse() {
        return this.#rawPtr.add(0x44).readS32();
    }
    set energyOnUse(energyOnUse) {
        this.#rawPtr.add(0x44).writeS32(energyOnUse);
    }

    get ignoreEnergyOnUse() {
        return this.#rawPtr.add(0x48).readU32();
    }
    set ignoreEnergyOnUse(ignoreEnergyOnUse) {
        this.#rawPtr.add(0x48).writeU8(ignoreEnergyOnUse);
    }

    get isSeen() {
        return this.#rawPtr.add(0x49).readU8();
    }
    set isSeen(isSeen) {
        this.#rawPtr.add(0x49).writeU8(isSeen);
    }

    get upgradedCost() {
        return this.#rawPtr.add(0x4a).readU8();
    }
    set upgradedCost(upgradedCost) {
        this.#rawPtr.add(0x4a).writeU8(upgradedCost);
    }

    get upgradedDamage() {
        return this.#rawPtr.add(0x4b).readU8();
    }
    set upgradedDamage(upgradedDamage) {
        this.#rawPtr.add(0x4b).writeU8(upgradedDamage);
    }

    get upgradedBlock() {
        return this.#rawPtr.add(0x4c).readU8();
    }
    set upgradedBlock(upgradedBlock) {
        this.#rawPtr.add(0x4c).writeU8(upgradedBlock);
    }

    get upgradedMagicNumber() {
        return this.#rawPtr.add(0x4d).readU8();
    }
    set upgradedMagicNumber(upgradedMagicNumber) {
        this.#rawPtr.add(0x4d).writeU8(upgradedMagicNumber);
    }

    get isSelected() {
        return this.#rawPtr.add(0x60).readU8();
    }
    set isSelected(isSelected) {
        this.#rawPtr.add(0x60).writeU8(isSelected);
    }

    get exhaust() {
        return this.#rawPtr.add(0x61).readU8();
    }
    set exhaust(exhaust) {
        this.#rawPtr.add(0x61).writeU8(exhaust);
    }

    get returnToHand() {
        return this.#rawPtr.add(0x62).readU8();
    }
    set returnToHand(returnToHand) {
        this.#rawPtr.add(0x62).writeU8(returnToHand);
    }

    get shuffleBackIntoDrawPile() {
        return this.#rawPtr.add(0x63).readU8();
    }
    set shuffleBackIntoDrawPile(shuffleBackIntoDrawPile) {
        this.#rawPtr.add(0x63).writeU8(shuffleBackIntoDrawPile);
    }

    get isEthereal() {
        return this.#rawPtr.add(0x64).readU8();
    }
    set isEthereal(isEthereal) {
        this.#rawPtr.add(0x64).writeU8(isEthereal);
    }

    get baseDamage() {
        return this.#rawPtr.add(0x74).readU32();
    }
    set baseDamage(baseDamage) {
        this.#rawPtr.add(0x74).writeS32(baseDamage);
    }

    get baseBlock() {
        return this.#rawPtr.add(0x78).readS32();
    }
    set baseBlock(baseBlock) {
        this.#rawPtr.add(0x78).writeS32(baseBlock);
    }

    get baseMagicNumber() {
        return this.#rawPtr.add(0x7c).readS32();
    }
    set baseMagicNumber(baseMagicNumber) {
        this.#rawPtr.add(0x7c).writeS32(baseMagicNumber);
    }

    get baseHeal() {
        return this.#rawPtr.add(0x80).readS32();
    }
    set baseHeal(baseHeal) {
        this.#rawPtr.add(0x80).writeS32(baseHeal);
    }

    get baseDraw() {
        return this.#rawPtr.add(0x84).readS32();
    }
    set baseDraw(baseDraw) {
        this.#rawPtr.add(0x84).writeS32(baseDraw);
    }

    get baseDiscard() {
        return this.#rawPtr.add(0x88).readS32();
    }
    set baseDiscard(baseDiscard) {
        this.#rawPtr.add(0x88).writeS32(baseDiscard);
    }

    get damage() {
        return this.#rawPtr.add(0x8c).readS32();
    }
    set damage(damage) {
        this.#rawPtr.add(0x8c).writeS32(damage);
    }

    get block() {
        return this.#rawPtr.add(0x90).readS32();
    }
    set block(block) {
        this.#rawPtr.add(0x90).writeS32(block);
    }

    get magicNumber() {
        return this.#rawPtr.add(0x94).readS32();
    }
    set magicNumber(magicNumber) {
        this.#rawPtr.add(0x94).writeS32(magicNumber);
    }

    get heal() {
        return this.#rawPtr.add(0x98).readS32();
    }
    set heal(heal) {
        this.#rawPtr.add(0x98).writeS32(heal);
    }

    get draw() {
        return this.#rawPtr.add(0x9c).readS32();
    }
    set draw(draw) {
        this.#rawPtr.add(0x9c).writeS32(draw);
    }

    get discard() {
        return this.#rawPtr.add(0xa0).readS32();
    }
    set discard(discard) {
        this.#rawPtr.add(0xa0).writeS32(discard);
    }

    get isDamageModified() {
        return this.#rawPtr.add(0xa4).readU8();
    }
    set isDamageModified(isDamageModified) {
        this.#rawPtr.add(0xa4).writeU8(isDamageModified);
    }

    get isBlockModified() {
        return this.#rawPtr.add(0xa5).readU8();
    }
    set isBlockModified(isBlockModified) {
        this.#rawPtr.add(0xa5).writeU8(isBlockModified);
    }

    get isMagicNumberModified() {
        return this.#rawPtr.add(0xa6).readU8();
    }
    set isMagicNumberModified(isMagicNumberModified) {
        this.#rawPtr.add(0xa6).writeU8(isMagicNumberModified);
    }

    get damageType() {
        return this.#rawPtr.add(0xa8).readU32();
    }
    set damageType(damageType) {
        this.#rawPtr.add(0xa8).writeU32(damageType);
    }

    get damageTypeForTurn() {
        return this.#rawPtr.add(0xac).readU32();
    }
    set damageTypeForTurn(damageTypeForTurn) {
        this.#rawPtr.add(0xac).writeU32(damageTypeForTurn);
    }

    get target() {
        return this.#rawPtr.add(0xb0).readU32();
    }
    set target(target) {
        this.#rawPtr.add(0xb0).writeU32(target);
    }

    get purgeOnUse() {
        return this.#rawPtr.add(0xb4).readU8();
    }
    set purgeOnUse(purgeOnUse) {
        this.#rawPtr.add(0xb4).writeU8(purgeOnUse);
    }

    get exhaustOnUseOnce() {
        return this.#rawPtr.add(0xb5).readU8();
    }
    set exhaustOnUseOnce(exhaustOnUseOnce) {
        this.#rawPtr.add(0xb5).writeU8(exhaustOnUseOnce);
    }

    get exhaustOnFire() {
        return this.#rawPtr.add(0xb6).readU8();
    }
    set exhaustOnFire(exhaustOnFire) {
        this.#rawPtr.add(0xb6).writeU8(exhaustOnFire);
    }

    get freeToPlayOnce() {
        return this.#rawPtr.add(0xb7).readU8();
    }
    set freeToPlayOnce(freeToPlayOnce) {
        this.#rawPtr.add(0xb7).writeU8(freeToPlayOnce);
    }

    get isInAutoplay() {
        return this.#rawPtr.add(0xb8).readU8();
    }
    set isInAutoplay(isInAutoplay) {
        this.#rawPtr.add(0xb8).writeU8(isInAutoplay);
    }

    get assetUrl() {
        return this.#rawPtr.add(0xc8).readUtf16String();
    }
    set assetUrl(assetUrl) {
        this.#rawPtr.add(0xc8).writeUtf16String(assetUrl);
    }

    get transparency() {
        return this.#rawPtr.add(0xd0).readFloat();
    }
    set transparency(transparency) {
        this.#rawPtr.add(0xd0).writeFloat(transparency);
    }

    get targetTransparency() {
        return this.#rawPtr.add(0xd4).readFloat();
    }
    set targetTransparency(targetTransparency) {
        this.#rawPtr.add(0xd4).writeFloat(targetTransparency);
    }

    get targetAngle() {
        return this.#rawPtr.add(0xd8).readFloat();
    }
    set targetAngle(targetAngle) {
        this.#rawPtr.add(0xd8).writeFloat(targetAngle);
    }

    get angle() {
        return this.#rawPtr.add(0xdc).readFloat();
    }
    set angle(angle) {
        this.#rawPtr.add(0xdc).writeFloat(angle);
    }

    get glowTimer() {
        return this.#rawPtr.add(0xf4).readFloat();
    }
    set glowTimer(glowTimer) {
        this.#rawPtr.add(0xf4).writeFloat(glowTimer);
    }

    get drawScale() {
        return this.#rawPtr.add(0x114).readFloat();
    }
    set drawScale(drawScale) {
        this.#rawPtr.add(0x114).writeFloat(drawScale);
    }

    get targetDrawScale() {
        return this.#rawPtr.add(0x118).readFloat();
    }
    set targetDrawScale(targetDrawScale) {
        this.#rawPtr.add(0x118).writeFloat(targetDrawScale);
    }

    get cardsToPreview() {
        return this.#rawPtr.add(0x134).readPointer();
    }
    set cardsToPreview(cardsToPreview) {
        return this.#rawPtr.add(0x134).writePointer(cardsToPreview);
    }

    get originalName() {
        return this.#rawPtr.add(0x13c).readUtf16String();
    }
    set originalName(originalName) {
        this.#rawPtr.add(0x13c).writeUtf16String(originalName);
    }

    get name() {
        return this.#rawPtr.add(0x140).readUtf16String();
    }
    set name(name) {
        this.#rawPtr.add(0x140).writeUtf16String(name);
    }

    get rawDescription() {
        return this.#rawPtr.add(0x144).readUtf16String();
    }
    set rawDescription(rawDescription) {
        this.#rawPtr.add(0x144).writeUtf16String(rawDescription);
    }

    get cardID() {
        return this.#rawPtr.add(0x148).readUtf16String();
    }
    set cardID(cardID) {
        this.#rawPtr.add(0x148).writeUtf16String(cardID);
    }
}

class NativeFunctionInfo {
    constructor(funcOffset, retType, argTypes, callABI)
    {
        this.funcOffset = funcOffset
        this.retType = retType
        this.argTypes = argTypes
        this.callABI = callABI
    }
}

class PatchManager
{
    static AbstractPlayer = {
        //void AbstractPlayer::loseGold(AbstractPlayer * player, int gold)
        loseGold:new NativeFunctionInfo(0x1756c69, 'void', ['pointer', 'int'])
    };
    static ConfusionPower = {
        //void ConfusionPower::onCardDraw(AbstractPower * thisPtr, STS::AbstractCard * card)
        onCardDraw:new NativeFunctionInfo(0x195C54D, 'void', ['pointer', 'pointer'])
    };
    static RedCards = {
        //STS::AbstractCard * Cards::Red::Strike_Red::Ctor(STS::AbstractCard * this)
        StrikeRedCtor : new NativeFunctionInfo(0x1747E89, 'pointer', ['pointer']),
        //STS::AbstractCard * Cards::Red::Defend_Red::Ctor(STS::AbstractCard * this)
        DefendRedCtor : new NativeFunctionInfo(0x173E7DD, 'pointer', ['pointer']),
        //STS::AbstractCard * Cards::Red::Feed::Ctor(STS::AbstractCard * this)
        FeedCtor : new NativeFunctionInfo(0x1740309, 'pointer', ['pointer']),
        //STS::AbstractCard * Cards::Red::Bash::Ctor(STS::AbstractCard * this)
        BashCtor : new NativeFunctionInfo(0x173AD4D, 'pointer', ['pointer']),
    };
    static PurpleCards = {
        //STS::AbstractCard * Cards::Purple::Alpha::Ctor(STS::AbstractCard * this)
        AlphaCtor : new NativeFunctionInfo(0x172AE45, 'pointer', ['pointer']),
    };
    static TempCards = {
        //STS::AbstractCard * Cards::Temp::Omega::Ctor(STS::AbstractCard * this)
        OmegaCtor : new NativeFunctionInfo(0x1750CE9, 'pointer', ['pointer']),
    }
}

let STSCodeBasePtr = Module.findBaseAddress("libSpire_ANDROID.so");

function AndroidLog(message)
{
    Java.perform(function(message) {
        let ALog = Java.use("android.util.Log");
        ALog.v("STS Mod", message);
    });
}

function HookSTSFunction(origFuncInfo, fakeFunc)
{
    let origFunc = new NativeFunction(STSCodeBasePtr.add(origFuncInfo.funcOffset), origFuncInfo.retType, origFuncInfo.argTypes);
    let fakeCallback = new NativeCallback(fakeFunc, origFuncInfo.retType, origFuncInfo.argTypes);
    Interceptor.replace(origFunc, fakeCallback);

    return origFunc;
}

function fakeRandom(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let origLoseGoldFunc = HookSTSFunction(PatchManager.AbstractPlayer.loseGold, (thisPtr, gold) => { origLoseGoldFunc(thisPtr, Math.ceil(gold*0.6)); });
let origOnCardDrawFunc = HookSTSFunction(PatchManager.ConfusionPower.onCardDraw, (thisPtr, cardPtr) => {
//    origOnCardDrawFunc(thisPtr, cardPtr)
    let baseCard = new AbstractCard(cardPtr);
    if (baseCard.cost >= 0) {
        let newCost = fakeRandom(0, baseCard.cost);
        if (baseCard.cost != newCost) {
            baseCard.cost = newCost;
            baseCard.costForTurn = baseCard.cost;
            baseCard.isCostModified = true;
        }
        baseCard.freeToPlayOnce = false;
    }
});
let origStrikeRedCtorFunc = HookSTSFunction(PatchManager.RedCards.StrikeRedCtor, (thisPtr) => {
    let ret = origStrikeRedCtorFunc(thisPtr);
    let newCard = new AbstractCard(ret);
    newCard.baseDamage++;
    return ret;
});
let origDefendRedCtorFunc = HookSTSFunction(PatchManager.RedCards.DefendRedCtor, (thisPtr) => {
    let ret = origDefendRedCtorFunc(thisPtr);
    let newCard = new AbstractCard(ret);
    newCard.baseBlock++;
    return ret;
});
let origFeedCtor = HookSTSFunction(PatchManager.RedCards.FeedCtor, (thisPtr) => {
    let ret = origFeedCtor(thisPtr);
    let newCard = new AbstractCard(ret);
    newCard.magicNumber = ++newCard.baseMagicNumber;
    return ret;
});
let origBashCtor = HookSTSFunction(PatchManager.RedCards.BashCtor, (thisPtr) => {
    let ret = origBashCtor(thisPtr);
    let newCard = new AbstractCard(ret);
    newCard.baseDamage = 12;
    return ret;
});
let origAlphaCtor = HookSTSFunction(PatchManager.PurpleCards.AlphaCtor, (thisPtr) => {
    let ret = origAlphaCtor(thisPtr);
    let newCard = new AbstractCard(ret);
    let fakePreview = origOmegaCtor(new NativePointer(0));
    newCard.cardsToPreview = fakePreview;
    return ret;
});
let origOmegaCtor = HookSTSFunction(PatchManager.TempCards.OmegaCtor, (thisPtr) => {
    let ret = origOmegaCtor(thisPtr);
    return ret;
});
