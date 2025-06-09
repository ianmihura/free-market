CARDS = [
    {
        name: "Bull x2",
        description: "x2 on the Bull side for next 3 rounds.",
        rounds: 3,
        play(that) {
            that.bull *= 2
        },
        unplay(that) {
            that.bull /= 2
        }
    },
    {
        name: "Bear x2",
        description: "x2 on the Bear side for next 3 rounds.",
        rounds: 3,
        play(that) {
            that.bear *= 2
        },
        unplay(that) {
            that.bear /= 2
        }
    },
    {
        name: "Frenzy!",
        description: "x2 on both sides for next 3 rounds.",
        rounds: 3,
        play(that) {
            that.bull *= 2
            that.bear *= 2
        },
        unplay(that) {
            that.bull /= 2
            that.bear /= 2
        },
    },
    {
        name: "Volatility",
        description: "MM doubles the amount of coin tosses.",
        rounds: 3,
        play(that) {
            // this.
            // that.bull *= 2
            // that.bear *= 2
        },
        unplay(that) {
            // that.bull /= 2
            // that.bear /= 2
        },
    },
    {
        name: "Earnings call",
        description: "10 coin flips pre-market.",
        rounds: 0,
        play(that) {
            // that.bull *= 2
            // that.bear *= 2
        },
        unplay(that) {
            // that.bull /= 2
            // that.bear /= 2
        },
    },
]
