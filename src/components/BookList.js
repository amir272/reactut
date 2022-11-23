import React from "react";
import { useQuery, gql } from '@apollo/client';

const getBooks = gql`
    query GetBooks
    {
        books{
            name
            id
            genre
            author{
                name
            }
        }
    }
`



function BookList() {
        const { loading, error, data } = useQuery(getBooks);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error : {error.message}</p>;
        
        return data.books.map(({ id, name, genre, author}) => (
            <div key={id}>
              <h3>{name}</h3>
              <b>About this book:</b>
              <p>Genre: {genre} written by {author.name}</p>
              <br />
            </div>
          ));
    }

export default BookList;