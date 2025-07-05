import { useForm } from 'react-hook-form';
import { useUpdateBookMutation, useGetBooksQuery } from '../Services/bookApi';
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
import { Textarea } from '@/components/ui/textarea';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
}

function EditBook() {
  const { id } = useParams();
  const { data: books } = useGetBooksQuery();
  const book = books?.find((b) => b.id === id);
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: book || {
      title: '',
      author: '',
      genre: '',
      isbn: '',
      description: '',
      copies: 1,
    },
  });

  const onSubmit = async (values: FormData) => {
    try {
      await updateBook({ id: id!, ...values }).unwrap();
      await Swal.fire({
        icon: 'success',
        title: 'Book Updated',
        text: 'Book has been updated successfully!',
      });
      navigate('/books');
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Something went wrong while updating the book.',
      });
    }
  };

  if (!book) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Book not found
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-primary">Edit Book</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {['title', 'author', 'genre', 'isbn'].map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as keyof FormData}
              rules={{ required: `${field[0].toUpperCase() + field.slice(1)} is required` }}
              render={({ field }) =>
                formItem({ label: field.name[0].toUpperCase() + field.name.slice(1), ...field })
              }
            />
          ))}

          <FormField
            control={form.control}
            name="description"
            rules={{ required: 'Description is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="copies"
            rules={{ required: 'Copies is required', min: { value: 0, message: 'Copies must be at least 0' } }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Update Book</Button>
        </form>
      </Form>
    </div>
  );
}

const formItem = ({ label, ...props }: any) => (
  <FormItem>
    <FormLabel>{label}</FormLabel>
    <FormControl>
      <Input {...props} />
    </FormControl>
    <FormMessage />
  </FormItem>
);

export default EditBook;
