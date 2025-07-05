import { useGetBooksQuery, useDeleteBookMutation } from '../../Services/bookApi';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Trash2, BookOpen, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function BookList() {
  const { data: books, isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (bookId: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e11d48',
      cancelButtonColor: '#9ca3af',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await deleteBook(bookId).unwrap();
        Swal.fire('Deleted!', 'Book has been deleted.', 'success');
      } catch {
        Swal.fire('Error', 'Failed to delete book', 'error');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 text-lg">
        <Loader2 className="animate-spin mr-2 h-6 w-6 text-orange-500" />
        Loading book list...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        📚 Library Book List
      </h1>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white">
        <Table>
          <TableHeader className="bg-orange-100 text-orange-800">
            <TableRow>
              <TableHead className="p-4">Title</TableHead>
              <TableHead className="p-4">Author</TableHead>
              <TableHead className="p-4">Genre</TableHead>
              <TableHead className="p-4">ISBN</TableHead>
              <TableHead className="p-4 text-center">Copies</TableHead>
              <TableHead className="p-4 text-center">Availability</TableHead>
              <TableHead className="p-4 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.map((book) => (
              <TableRow
                key={book.id}
                className="hover:bg-orange-50 transition-colors"
              >
                <TableCell className="p-4">{book.title}</TableCell>
                <TableCell className="p-4">{book.author}</TableCell>
                <TableCell className="p-4">{book.genre}</TableCell>
                <TableCell className="p-4">{book.isbn}</TableCell>
                <TableCell className="p-4 text-center">{book.copies}</TableCell>
                <TableCell className="p-4 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      book.available
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {book.available ? 'Available' : 'Unavailable'}
                  </span>
                </TableCell>
                <TableCell className="p-4 text-center">
                  <div className="flex justify-center gap-2">
                    <Button
                      asChild
                      size="icon"
                      variant="outline"
                      className="border-gray-300"
                    >
                      <Link to={`/edit-book/${book.id}`} title="Edit Book">
                        <Edit className="h-4 w-4 text-orange-600" />
                      </Link>
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleDelete(book.id)}
                      title="Delete Book"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button
                      asChild
                      size="icon"
                      variant="default"
                      className={`${
                        book.available
                          ? 'bg-orange-500 hover:bg-orange-600'
                          : 'bg-gray-300 cursor-not-allowed'
                      }`}
                      disabled={!book.available}
                      title="Borrow Book"
                    >
                      <Link to={`/borrow-book/${book.id}`}>
                        <BookOpen className="h-4 w-4 text-white" />
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default BookList;
