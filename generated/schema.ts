// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class History extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save History entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save History entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("History", id.toString(), this);
  }

  static load(id: string): History | null {
    return store.get("History", id) as History | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalProposalCount(): BigInt {
    let value = this.get("totalProposalCount");
    return value.toBigInt();
  }

  set totalProposalCount(value: BigInt) {
    this.set("totalProposalCount", Value.fromBigInt(value));
  }

  get allProposals(): Array<string> {
    let value = this.get("allProposals");
    return value.toStringArray();
  }

  set allProposals(value: Array<string>) {
    this.set("allProposals", Value.fromStringArray(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    return value.toString();
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get proposer(): string {
    let value = this.get("proposer");
    return value.toString();
  }

  set proposer(value: string) {
    this.set("proposer", Value.fromString(value));
  }

  get startBlock(): BigInt {
    let value = this.get("startBlock");
    return value.toBigInt();
  }

  set startBlock(value: BigInt) {
    this.set("startBlock", Value.fromBigInt(value));
  }

  get endBlock(): BigInt {
    let value = this.get("endBlock");
    return value.toBigInt();
  }

  set endBlock(value: BigInt) {
    this.set("endBlock", Value.fromBigInt(value));
  }

  get forVotes(): BigInt {
    let value = this.get("forVotes");
    return value.toBigInt();
  }

  set forVotes(value: BigInt) {
    this.set("forVotes", Value.fromBigInt(value));
  }

  get againstVotes(): BigInt {
    let value = this.get("againstVotes");
    return value.toBigInt();
  }

  set againstVotes(value: BigInt) {
    this.set("againstVotes", Value.fromBigInt(value));
  }

  get ballots(): Array<string> {
    let value = this.get("ballots");
    return value.toStringArray();
  }

  set ballots(value: Array<string>) {
    this.set("ballots", Value.fromStringArray(value));
  }

  get participentCount(): BigInt {
    let value = this.get("participentCount");
    return value.toBigInt();
  }

  set participentCount(value: BigInt) {
    this.set("participentCount", Value.fromBigInt(value));
  }

  get open(): boolean {
    let value = this.get("open");
    return value.toBoolean();
  }

  set open(value: boolean) {
    this.set("open", Value.fromBoolean(value));
  }

  get quorum(): BigInt {
    let value = this.get("quorum");
    return value.toBigInt();
  }

  set quorum(value: BigInt) {
    this.set("quorum", Value.fromBigInt(value));
  }

  get quorumRequired(): BigInt {
    let value = this.get("quorumRequired");
    return value.toBigInt();
  }

  set quorumRequired(value: BigInt) {
    this.set("quorumRequired", Value.fromBigInt(value));
  }

  get totalVotesAvailible(): BigInt {
    let value = this.get("totalVotesAvailible");
    return value.toBigInt();
  }

  set totalVotesAvailible(value: BigInt) {
    this.set("totalVotesAvailible", Value.fromBigInt(value));
  }

  get executor(): Bytes {
    let value = this.get("executor");
    return value.toBytes();
  }

  set executor(value: Bytes) {
    this.set("executor", Value.fromBytes(value));
  }
}

export class Ballot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ballot entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ballot entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ballot", id.toString(), this);
  }

  static load(id: string): Ballot | null {
    return store.get("Ballot", id) as Ballot | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get voter(): string {
    let value = this.get("voter");
    return value.toString();
  }

  set voter(value: string) {
    this.set("voter", Value.fromString(value));
  }

  get support(): boolean {
    let value = this.get("support");
    return value.toBoolean();
  }

  set support(value: boolean) {
    this.set("support", Value.fromBoolean(value));
  }

  get votesCast(): BigInt {
    let value = this.get("votesCast");
    return value.toBigInt();
  }

  set votesCast(value: BigInt) {
    this.set("votesCast", Value.fromBigInt(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }
}

export class Voter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Voter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Voter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Voter", id.toString(), this);
  }

  static load(id: string): Voter | null {
    return store.get("Voter", id) as Voter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalsProposed(): Array<string> {
    let value = this.get("proposalsProposed");
    return value.toStringArray();
  }

  set proposalsProposed(value: Array<string>) {
    this.set("proposalsProposed", Value.fromStringArray(value));
  }

  get proposalsProposedCount(): BigInt {
    let value = this.get("proposalsProposedCount");
    return value.toBigInt();
  }

  set proposalsProposedCount(value: BigInt) {
    this.set("proposalsProposedCount", Value.fromBigInt(value));
  }

  get ballotsCast(): Array<string> {
    let value = this.get("ballotsCast");
    return value.toStringArray();
  }

  set ballotsCast(value: Array<string>) {
    this.set("ballotsCast", Value.fromStringArray(value));
  }

  get proposalsParticipatedCount(): BigInt {
    let value = this.get("proposalsParticipatedCount");
    return value.toBigInt();
  }

  set proposalsParticipatedCount(value: BigInt) {
    this.set("proposalsParticipatedCount", Value.fromBigInt(value));
  }
}