# Spark Sync

**JavaScript (Node.js)** · **v0.1.0**

_Fibonacci sequence generator with configurable term count_

---

## Features

- Prints N terms of the Fibonacci sequence
- Handles large term counts with BigInt
- Zero external dependencies

## Installation

```bash
git clone https://github.com/DevCode01/spark-sync.git
cd spark-sync
```

## Usage

```bash
./spark-sync.js 20
```

## How it works

Generates the first N Fibonacci numbers using BigInt arithmetic, so values stay exact even for hundreds of terms. Prints the sequence comma-separated.

## Options

- `N` - number of terms (default 10, must be >= 1)

## Example

```bash
$ ./spark-sync.js 10
Fibonacci (10 terms): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

## License

MIT
