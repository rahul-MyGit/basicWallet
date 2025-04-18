# Crypto Wallet Extension Architecture

### Frontend (Chrome extension)
- React + Ts
- Shadcn UI components
- Wallet interface
- UI for transaction

### Backend
- Nodejs + express + Ts server
- Prisma ORM with PostgreSQL
- Auth with Passport
- Transaction validation
- Simulated blockchain

## Core Functionality
1. **Authentication**: Google auth
2. **Wallet Management**: Create HD wallets from seed phrases
3. **Asset Management**: Track balances of simulated coins
4. **Transactions**: Create and sign transactions
5. **Validation**: Admin panel for transaction validation

## Data Flow
1. User logs in with Google
2. User creates/import wallet with seed phrase
3. User initiate transaction
4. Transaction is signed with private key
5. Transaction is submitted to backend
6. Admin validates transaction (basic as success and fail)
7. Transaction is added to the simulated blockchain
8. Balances are updated