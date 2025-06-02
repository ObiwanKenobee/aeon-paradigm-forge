
declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        onClose: () => void;
        callback: (response: { reference: string; status: string }) => void;
      }) => {
        openIframe: () => void;
      };
    };
  }
}

export {};
