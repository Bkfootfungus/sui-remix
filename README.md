# Sui Remix MVP

A starter project for building **Sui Move modules** and **NFT marketplaces** using React + Sui Move.

---

## Quickstart

1. Clone the repo:  
```bash
git clone git@github.com:your-username/my_token.git
cd my_token
```
2. Install dependencies:  
```bash
npm install
```
3. Start the frontend:  
```bash
npm start
```
4. Build Move modules:  
```bash
sui move build
```
5. Test Move modules:  
```bash
sui move test
```

---

## Project Description

This project is built with **React** for the frontend and **Sui Move** for blockchain modules.  
It includes templates for:

- NFT creation  
- Marketplace interactions  
- Token modules  

This README gives instructions for running both the frontend React app and Sui Move modules locally.

---

## Sui Setup (Blockchain)

1. **Install Sui CLI**  
   Follow the official guide: [Sui Documentation](https://docs.sui.io/)

2. **Check your active address**  
```bash
sui client active-address
```

3. **Build Move modules**  
```bash
sui move build
```

4. **Test Move modules**  
```bash
sui move test
```

---

## Example Workflow

1. Create a new NFT module in `packages/my_module/Move.toml`  
2. Build it:  
```bash
sui move build
```
3. Deploy locally or on testnet  
4. Interact via React frontend using pre-built marketplace templates  

---

## License

This project is released under the **MIT License**. See the `LICENSE` file for details.

---

## Learn More

- [Sui Documentation](https://docs.sui.io/)  
- [Move Language](https://move-language.com/)  
- [React Documentation](https://reactjs.org/)
