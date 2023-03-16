# Lenuuid

Very simple deno module for creating UUID's with a length lower than 33 (meaning max 32)

## Usage

```typescript
import { LenUUID as uid } from 'https://deno.land/lenuuid/mod.ts';

const uuid: string = uid.genLenUUID(10); // Will give back UUID with length of 10
```