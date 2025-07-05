import { useForm } from 'react-hook-form';
import { useCreateBookMutation } from '../../Services/bookApi';
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
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // ✅ Import SweetAlert2

interface FormData {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
}

function CreateBook() {
  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();

  const form = useForm<FormData>({
    defaultValues: {
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
      await createBook(values).unwrap();
      await Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Book created successfully',
        confirmButtonColor: '#f97316', // orange-500
      });
      navigate('/books');
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Failed to create book',
        confirmButtonColor: '#ef4444', // red-500
      });
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen my-10">
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Add New Book</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            rules={{ required: 'Title is required' }}
            render={({ field }) => formItem({ label: 'Title', ...field })}
          />
          <FormField
            control={form.control}
            name="author"
            rules={{ required: 'Author is required' }}
            render={({ field }) => formItem({ label: 'Author', ...field })}
          />
          <FormField
            control={form.control}
            name="genre"
            rules={{ required: 'Genre is required' }}
            render={({ field }) => formItem({ label: 'Genre', ...field })}
          />
          <FormField
            control={form.control}
            name="isbn"
            rules={{ required: 'ISBN is required' }}
            render={({ field }) => formItem({ label: 'ISBN', ...field })}
          />
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
          <Button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white w-full">
            Create Book
          </Button>
        </form>
      </Form>
    </div>
  );
}

import type { InputHTMLAttributes } from 'react';

interface FormItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const formItem = ({ label, ...props }: FormItemProps) => (
  <FormItem>
    <FormLabel>{label}</FormLabel>
    <FormControl>
      <Input {...props} />
    </FormControl>
    <FormMessage />
  </FormItem>
);

export default CreateBook;
