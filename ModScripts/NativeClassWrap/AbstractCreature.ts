import { JString } from "./JString.js";
import { NativeClassWrapper } from "./NativeClassWrapper.js";
import { NativeFunctionInfo } from "../NativeFuncWrap/NativeFunctionInfo.js";
import { NativeSTDLib } from "../NativeFuncWrap/NativeSTDLib.js";

export class AbstractCreature extends NativeClassWrapper {
    //NativePointer AbstractCreature *
    constructor(CthisPtr: NativePointer) {
        super(CthisPtr);
    }

    static readonly #vfunctionMap = {
        /**
         * ```c
         * int32_t STS::AbstractCreature::decrementBlock(STS::AbstractCreature* this, STS::DamageInfo* info, int32_t damageAmount);
         * ```
         */
        decrementBlock: new NativeFunctionInfo(0x28, 'int32', ['pointer', 'pointer', 'int32']),
        /**
         * ```c
         * void STS::AbstractCreature::decrementBlock(STS::AbstractCreature* this, int32_t amount, bool showEffect);
         * ```
         */
        increaseMaxHp: new NativeFunctionInfo(0x30, 'void', ['pointer', 'int32', 'bool']),
        /**
         * ```c
         * void STS::AbstractCreature::decreaseMaxHealth(STS::AbstractCreature* this, int32_t amount);
         * ```
         */
        decreaseMaxHealth: new NativeFunctionInfo(0x38, 'void', ['pointer', 'int32']),
        /**
         * ```c
         * void STS::AbstractCreature::heal(STS::AbstractCreature* this, int32_t amount, bool showEffect);
         * ```
         */
        heal: new NativeFunctionInfo(0x90, 'void', ['pointer', 'int32', 'bool']),
        /**
         * ```c
         * void STS::AbstractCreature::heal(STS::AbstractCreature* this, int32_t amount);
         * ```
         * 
         * in AbstractCreature heal2 just call `this.heal(amount, true);`, but AbstractMonster/AbstractPlayer will override it.
         */
        heal2: new NativeFunctionInfo(0x98, 'void', ['pointer', 'int32']),
        /**
         * ```c
         * void STS::AbstractCreature::addBlock(STS::AbstractCreature* this, int32_t blockAmount);
         * ```
         */
        addBlock: new NativeFunctionInfo(0xA0, 'void', ['pointer', 'int32']),
        /**
         * ```c
         * void STS::AbstractCreature::loseBlock(STS::AbstractCreature* this, int32_t amount, bool noAnimation);
         * ```
         * 0xB0 just call `this.loseBlock(this.currentBlock, false);`
         * 
         * 0xB8 just call `this.loseBlock(this.currentBlock, noAnimation);`
         * 
         * 0xC0 just call `this.loseBlock(amount, false);`
         */
        loseBlock: new NativeFunctionInfo(0xA8, 'void', ['pointer', 'int32', 'bool']),
        /**
         * ```c
         * void STS::AbstractCreature::addPower(STS::AbstractCreature* this, STS::AbstractPower* powerToApply);
         * ```
         */
        addPower: new NativeFunctionInfo(0xD8, 'void', ['pointer', 'pointer']),
        /**
         * ```c
         * STS::AbstractPower* STS::AbstractCreature::getPower(STS::AbstractCreature* this, JString* targetID);
         * ```
         */
        getPower: new NativeFunctionInfo(0x168, 'pointer', ['pointer', 'pointer']),
        /**
         * ```c
         * bool STS::AbstractCreature::hasPower(STS::AbstractCreature* this, JString* targetID);
         * ```
         */
        hasPower: new NativeFunctionInfo(0x170, 'bool', ['pointer', 'pointer']),
        /**
         * ```c
         * bool STS::AbstractCreature::getDeadOrEscaped(STS::AbstractCreature* this);
         * ```
         */
        getDeadOrEscaped: new NativeFunctionInfo(0x178, 'bool', ['pointer']),
        /**
         * ```c
         * void STS::AbstractCreature::loseGold(STS::AbstractCreature* this, int32_t goldAmount);
         * ```
         */
        loseGold: new NativeFunctionInfo(0x180, 'void', ['pointer', 'int32']),
        /**
         * ```c
         * void STS::AbstractCreature::gainGold(STS::AbstractCreature* this, int32_t goldAmount);
         * ```
         */
        gainGold: new NativeFunctionInfo(0x188, 'void', ['pointer', 'int32']),
    };

    addBlock(amount: number) {
        this.getVirtualFunction(AbstractCreature.#vfunctionMap.addBlock)(this.rawPtr, amount);
    }

    /** subclass object(`AbstractMonster`,`AbstractPlayer`) shall call `heal2`. */
    heal(amount: number, showEffect: boolean) {
        this.getVirtualFunction(AbstractCreature.#vfunctionMap.heal)(this.rawPtr, amount, Number(showEffect));
    }

    /** subclass object(`AbstractMonster`,`AbstractPlayer`) shall call it. */
    heal2(amount: number) {
        this.getVirtualFunction(AbstractCreature.#vfunctionMap.heal2)(this.rawPtr, amount);
    }

    addPower(powerPtr: NativePointer) {
        this.getVirtualFunction(AbstractCreature.#vfunctionMap.addPower)(this.rawPtr, powerPtr);
    }

    /** return AbstractPower* */
    getPower(powerId: string): NativePointer {
        const nativePowerId = NativeSTDLib.JString.Ctor(powerId);
        return this.getVirtualFunction(AbstractCreature.#vfunctionMap.getPower)(this.rawPtr, nativePowerId);
    }

    hasPower(powerId: string): boolean {
        const nativePowerId = NativeSTDLib.JString.Ctor(powerId);
        return this.getVirtualFunction(AbstractCreature.#vfunctionMap.hasPower)(this.rawPtr, nativePowerId);
    }

    loseGold(goldAmount: number) {
        this.getVirtualFunction(AbstractCreature.#vfunctionMap.loseGold)(this.rawPtr, goldAmount);
    }

    gainGold(goldAmount: number) {
        this.getVirtualFunction(AbstractCreature.#vfunctionMap.gainGold)(this.rawPtr, goldAmount);
    }

    get name() {
        return this.readOffsetJString(0x8).content;
    }
    set name(value) {
        this.writeOffsetJString(0x8, JString.CreateJString(value));
    }

    get id() {
        return this.readOffsetJString(0xC).content;
    }
    set id(value) {
        this.writeOffsetJString(0xC, JString.CreateJString(value));
    }

    /** ArrayList\<AbstractPower\> * */
    get powers() {
        return this.readOffsetPointer(0x10);
    }

    get isPlayer() {
        return this.readOffsetBool(0x14);
    }
    set isPlayer(value) {
        this.writeOffsetBool(0x14, value);
    }

    get isBloodied() {
        return this.readOffsetBool(0x15);
    }
    set isBloodied(value) {
        this.writeOffsetBool(0x15, value);
    }

    get gold() {
        return this.readOffsetS32(0x2C);
    }
    set gold(value) {
        this.writeOffsetS32(0x2C, value);
    }

    get displayGold() {
        return this.readOffsetS32(0x30);
    }
    set displayGold(value) {
        this.writeOffsetS32(0x30, value);
    }

    get isDying() {
        return this.readOffsetBool(0x34);
    }
    set isDying(value) {
        this.writeOffsetBool(0x34, value);
    }

    get isDead() {
        return this.readOffsetBool(0x35);
    }
    set isDead(value) {
        this.writeOffsetBool(0x35, value);
    }

    get isEscaping() {
        return this.readOffsetBool(0x40);
    }
    set isEscaping(value) {
        this.writeOffsetBool(0x40, value);
    }

    get currentHealth() {
        return this.readOffsetS32(0x64);
    }
    set currentHealth(value) {
        this.writeOffsetS32(0x64, value);
    }

    get maxHealth() {
        return this.readOffsetS32(0x68);
    }
    set maxHealth(value) {
        this.writeOffsetS32(0x68, value);
    }

    get currentBlock() {
        return this.readOffsetS32(0x6C);
    }
    set currentBlock(value) {
        this.writeOffsetS32(0x6C, value);
    }
}