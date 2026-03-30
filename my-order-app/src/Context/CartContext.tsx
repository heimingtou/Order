/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer, type ReactNode } from "react";

// --- TYPES ---
type drink = { id: string; name: string; price: number };
type billProp = { id: string; name: string; price: number; quantity: number };

type historyBill = {
  id: string;
  nameTable: string;
  listDrink: billProp[];
  totalBill: number;
};

type CartContextType = {
  listBillReducer: billProp[];
  listHistoryBill: historyBill[];
  totalBill: number;
  dispatch: React.Dispatch<Action>;
  dispatchHistory: React.Dispatch<Action>;
  addDrink: (drink: drink) => void;
  subDrink: (drink: billProp) => void;
  saveOrder: (nameTable: string) => void; // Phải có ở đây để bên ngoài gọi được
};

type Action =
  | { type: "ADD"; payload: billProp }
  | { type: "SUB"; payload: billProp }
  | { type: "REMOVE"; payload: string }
  | {type: "SET-CART"; payload: billProp[]}
  | { type: "CLEAR" }
  | { type: "SAVE_TO_HISTORY"; payload: historyBill }
  | {type: "DeleteBill"; payload: string}

export const CartContext = createContext<CartContextType | undefined>(undefined);

// --- INITIALIZERS (Khởi tạo từ LocalStorage) ---
const cartInitializer = () => {
  const localData = localStorage.getItem("cart_data");
  return localData ? JSON.parse(localData) : [];
};

const historyInitializer = () => {
  const localData = localStorage.getItem("history_data");
  return localData ? JSON.parse(localData) : [];
};

export function CartProvider({ children }: { children: ReactNode }) {
  
  // 1. Reducer cho lịch sử hóa đơn
  function historyReducer(state: historyBill[], action: Action): historyBill[] {
    switch (action.type) {
      case "SAVE_TO_HISTORY":
        return [action.payload, ...state];
      case "DeleteBill":
        return state.filter(bill => bill.id !== action.payload);
      default:
        return state;
    }
  }

  // 2. Reducer cho giỏ hàng hiện tại
  function reducer(state: billProp[], action: Action): billProp[] {
    switch (action.type) {
      case "ADD": {
        const existingItem = state.find((item) => item.id === action.payload.id);
        if (existingItem) {
          return state.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...state, action.payload];
      }
      case "SUB": {
        if (action.payload.quantity > 1) {
          return state.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
        return state.filter((item) => item.id !== action.payload.id);
      }
      case "CLEAR":
        return [];
      case "SET-CART":
        return action.payload;
      default:
        return state;
    }
  }

  // --- STATES ---
  const [listHistoryBill, dispatchHistory] = useReducer(historyReducer, [], historyInitializer);
  const [listBillReducer, dispatch] = useReducer(reducer, [], cartInitializer);

  const totalBill = listBillReducer.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // --- FUNCTIONS ---
  function addDrink(drink: drink) {
    const billItem: billProp = { ...drink, quantity: 1 };
    dispatch({ type: "ADD", payload: billItem });
  }

  function subDrink(drink: billProp) {
    dispatch({ type: "SUB", payload: drink });
  }

  const saveOrder = (nameTable: string) => {
    if (listBillReducer.length === 0) return;

    const newHistoryEntry: historyBill = {
      id: Date.now().toString(),
      nameTable: nameTable,
      listDrink: [...listBillReducer],
      totalBill: totalBill,
    };

    dispatchHistory({ type: "SAVE_TO_HISTORY", payload: newHistoryEntry });
    dispatch({ type: "CLEAR" });
    alert("Đã lưu hóa đơn vào lịch sử!");
  };

  // --- PERSISTENCE (LocalStorage) ---
  useEffect(() => {
    localStorage.setItem("history_data", JSON.stringify(listHistoryBill));
  }, [listHistoryBill]);

  useEffect(() => {
    localStorage.setItem("cart_data", JSON.stringify(listBillReducer));
  }, [listBillReducer]);

  return (
    <CartContext.Provider
      value={{
        listBillReducer,
        listHistoryBill, // Nhớ đưa vào đây
        totalBill,
        dispatch,
        dispatchHistory,
        addDrink,
        subDrink,
        saveOrder, // Nhớ đưa vào đây
      }}
    >
      {children}
    </CartContext.Provider>
  );
}