const books = [
  {
    id: 1,
    image: '../public/images/backlog.jpg',
    title: 'Product Backlog Building',
    author: 'Paulo Caroli'
  },
  {
    id: 2,
    image: './public/images/algoritmos.jpg',
    title: 'Entendendo Algoritmos',
    author: 'Aditya Y. Bhargava'
  },
  {
    id: 3,
    image: './public/images/ddd.jpg',
    title: 'Domain-Driven Design',
    author: 'Eric Evans'
  }
];

const Booklist = () => {
  const sayTheName = (name: string) => {
    alert(name);
  }


  return <section className='booklist'>
    {books.map((book, index) => {
      return <div onClick={() => sayTheName(book.title)}>
        <Book key={book.id} {...book} number={index} />
      </div>
    })}
  </section>
}

const Book = ({ image, title, author, number }: BookProps) => {
  return <article className='book'>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
    <span className="number">#{number+1}</span>
  </article>;
}

type BookProps = {
  image: string,
  title: string,
  author: string,
  id: number,
  number: number
}

export default Booklist;
