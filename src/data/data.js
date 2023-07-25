let books = [
  {
    name: "آئین زندگی",
    author: "احمدحسین شریفی",
    number: 21,
    amount: "50,000",
    due: "1401/01/12",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است",
    img: "https://img.taaghche.com/frontCover/93140.jpg",
  },
  {
    name: "زمان حال",
    author: "فاطمه یوسفی",
    number: 22,
    amount: "65,000",
    due: "1400/12/22",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است",
    img: "https://www.iranketab.ir/Images/ProductImages/b589d1c7cdb34963bfd39dd5c7c0cd3b.jpg",
  },
  {
    name: "مدیریت زمان",
    author: "برایان تریسی",
    number: 23,
    amount: "42,000",
    due: "1400/08/03",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است",
    img: "https://img.ketabrah.ir/img/l/5709950927843949.jpg",
  },
  {
    name: "اثر مرکب",
    author: "دارن هاردی",
    number: 24,
    amount: "75,000",
    due: "1399/01/12",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است که دارای ۱۲ فصل هست کهتاثیرات اثر مرکب بر زندگی بشر و انسان ها را بررسی",
    img: "https://fidibo.com/images/books/69249_94233_normal.jpg",
  },
  {
    name: "انگیزه",
    author: "دانیل پینک",
    number: 25,
    amount: "52,000",
    due: "1401/02/14",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است",
    img: "https://www.iranketab.ir/Images/ProductImages/0471d1cbec064ad8b2b39f38f98577ee.jpg",
  },
  {
    name: "کنترل کیفیت آماری",
    author: "کریم آتشگر",
    number: 26,
    amount: "43,000",
    due: "1401/08/03",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است",
    img: "https://img.ketabrah.ir/img/l/7000234772488322.jpg",
  },
  {
    name: "انتگرال",
    author: "امیرعلی خلجی",
    number: 27,
    amount: "20,000",
    due: "1398/01/12",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است",
    img: "https://img.ketabrah.ir/img/l/3288345527932451.jpg",
  },
  {
    name: "ریاضیات",
    author: "کیم جسوک",
    number: 28,
    amount: "51,000",
    due: "1402/02/14",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است",
    img: "https://img.ketabrah.ir/img/l/7313872494281862.jpg",
  },
  {
    name: "شیوه گرگ",
    author: "جردن بلفورد",
    number: 29,
    amount: "51,000",
    due: "1402/02/14",
    description: "این کتاب نوشته ی محمد محمدی برای آموزش آیین های زندگی برای جوانان و نوجوانان نوشته شده است",
    img: "https://img.ketabrah.ir/img/l/4147327899865477.jpg",
  },
];

export const getBooks = () => {
  return books;
};
export const getBook = (number) => {
  return books.find(book => book.number===number);
}

export  const deleteBook = (number) => {
  books = books.filter(
      (book) => book.number !== number
  );
}