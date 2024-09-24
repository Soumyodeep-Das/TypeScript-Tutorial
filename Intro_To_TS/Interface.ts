interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial: () => string,
    newTrial(): string,
    getCoupon(couponname: string): number,
}

// Reopenning a interface
interface User {
    githubId: string,
}

// Inheritence
interface Admin extends User {
    role: 'admin' | "ca" | "learner",
}

const sdas: User = {
    dbId: 22, 
    email: 'sdas@email.com',
    githubId: 'github',
    userId: 2202,
    startTrial: () => {
        return 'Trial Started'
    },
    newTrial: () => {
        return 'new trial'
    },
    getCoupon: (coupon: 'sdas10') => { // don't need to match the parameter names
        return 10
    }
}