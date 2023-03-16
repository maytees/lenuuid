export class LenUUID {
  static genLenUUID(len: number, dashes?: boolean): string {
    return !dashes
      ? crypto.randomUUID().replace(/-/g, "").slice(0, len)
      : crypto.randomUUID().slice(0, len);
  }
}
