import { useForm } from 'react-hook-form';
import { useBorrowBookMutation, useGetBooksQuery } from '../Services/bookApi';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
  quantity: number;
  dueDate: string;
}

function BorrowBook() {
  const { bookId } = useParams();
  const { data: books, isLoading } = useGetBooksQuery();
  const book = books?.find((b) => b.id === bookId);
  const [borrowBook] = useBorrowBookMutation();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: {
      quantity: 1,
      dueDate: new Date().toISOString().split('T')[0],
    },
  });

  const onSubmit = async (values: FormData) => {
    if (book && values.quantity > book.copies) {
      Swal.fire({
        icon: 'error',
        title: 'Not Enough Copies',
        text: 'Requested quantity exceeds available stock.',
      });
      return;
    }

    try {
      await borrowBook({ bookId: bookId!, ...values }).unwrap();
      await Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Book borrowed successfully.',
        confirmButtonColor: '#FB923C', // Tailwind's orange-400
      });
      navigate('/borrow-summary');
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Could not process your request.',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 font-medium text-lg">
        Loading book details...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center mt-20 text-lg font-semibold text-red-600">
        ❌ No book found with this ID.
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4 py-12 my-10">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 transition-all">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-2">
          Borrow Book
        </h1>
        <p className="text-center text-gray-500 mb-6">
          You are borrowing: <span className="font-semibold">{book.title}</span>
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="quantity"
              rules={{
                required: 'Quantity is required',
                min: { value: 1, message: 'Must be at least 1' },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">
                    Quantity <span className="text-sm">(Available: {book.copies})</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={book.copies}
                      {...field}
                      className="rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              rules={{ required: 'Due date is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Due Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      className="rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-semibold py-2 rounded-lg"
            >
              Borrow Book
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default BorrowBook;
