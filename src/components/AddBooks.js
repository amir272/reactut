import React from "react";
import { useMutation, gql, useQuery} from '@apollo/client';

const getAuthors = gql`
    query GetAuthor
    {
        authors{
            name
            id
            age
        }
    }
`;

const ADD_BOOK = gql`
mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      author{
        name
      }
    }
  }
`;
function AddBooks() {
    const [name, setName] = React.useState("");
    const [genre, setGenre] = React.useState("");
    const [authorId, setAuthorId] = React.useState("");

    const [addBook] = useMutation(ADD_BOOK);
    function handleCreatePost(event) {
        event.preventDefault();
        // the mutate function also doesn't return a promise
        addBook({ variables: { name, genre, authorId } });
      }
    const { loading, error, data } = useQuery(getAuthors, {
        variables: {}
    });

    console.log(data);
    const displayAuthors = ()=>{
        if(loading){
            return( <option disabled>Loading authors</option> );
        }else if(error) {
            return( <option disabled>Failed to load authors</option> );
        }else{
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
    }
 
     return (
      <div>
        <form id="add-book" onSubmit={handleCreatePost}>
                <div className="field">
                        <label>Name:</label>
                <input value={name} onChange={(event) => {setName(event.target.value); console.log(name)}} />
                </div>

                <div className="field">
                        <label>Genre:</label>
                <input value={genre} onChange={(event) => {setGenre(event.target.value); console.log(genre)}} />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select onChange={(event) => {setAuthorId(event.target.value); console.log(authorId)}}>
                        <option>Select author</option>
                        {displayAuthors()}
                    </select>
                </div>
                <button>+</button>

            </form>
      </div>
    );
  }

  export default AddBooks;