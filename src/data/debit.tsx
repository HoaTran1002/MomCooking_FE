import { IDebit } from "../app/interface/debit.interface";

export const listDebits: IDebit[] = [
    {
      id: '1',
      listItem: [
        {
          name: 'Món ăn A',
          priceDebit: 100,
          priceDebitHasBeenPay: 100,
        },
        {
          name: 'Món ăn B',
          priceDebit: 120,
          priceDebitHasBeenPay: 60,
        },
      ],
      statusDebitName: 'Đã thanh toán',
      typeStatus:"success",
      sumDebit: 220,
      sumDebitHasBeenPay:0,
      dayPay: new Date('2023-11-07'),
    },
    {
      id: '2',
      listItem: [
        {
          name: 'Món ăn C',
          priceDebit: 90,
          priceDebitHasBeenPay: 0,
        },
        {
          name: 'Món ăn D',
          priceDebit: 80,
          priceDebitHasBeenPay: 40,
        },
      ],
      statusDebitName: 'Chưa thanh toán',
      sumDebit: 170,
      sumDebitHasBeenPay:0,
      typeStatus:"error",
      dayPay: new Date('2023-11-08'),
    },
  ];
  
  