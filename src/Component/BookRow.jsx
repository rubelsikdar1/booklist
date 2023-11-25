import { MdDelete } from "react-icons/md";

const BookRow = ({booksList}) => {
    const {title,author,isbn,pubYear}= booksList;
   
    return (
        <><tr>
            <td>{isbn}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{pubYear}</td>
            <td><MdDelete color="red" /></td>
        </tr>
        </>
    );
};

export default BookRow;