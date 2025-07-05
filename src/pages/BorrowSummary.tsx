import { useGetBorrowSummaryQuery } from '../Services/bookApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Loader2 } from 'lucide-react';

function BorrowSummary() {
  const { data: summary, isLoading } = useGetBorrowSummaryQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 text-lg">
        <Loader2 className="animate-spin mr-2 h-6 w-6 text-orange-500" />
        Loading borrow summary...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8 tracking-tight">
        📚 Borrow Summary Report
      </h1>

      {summary && summary.length > 0 ? (
        <div className="bg-white shadow-lg rounded-xl overflow-x-auto">
          <Table>
            <TableHeader className="bg-orange-100 text-orange-700">
              <TableRow>
                <TableHead className="text-sm font-bold uppercase tracking-wider p-4">
                  Book Title
                </TableHead>
                <TableHead className="text-sm font-bold uppercase tracking-wider p-4">
                  ISBN
                </TableHead>
                <TableHead className="text-sm font-bold uppercase tracking-wider p-4 text-right">
                  Total Borrowed
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {summary.map((item) => (
                <TableRow
                  key={item.bookId}
                  className="hover:bg-orange-50 transition-colors"
                >
                  <TableCell className="p-4 font-medium text-gray-800">
                    {item.title}
                  </TableCell>
                  <TableCell className="p-4 text-gray-600">
                    {item.isbn}
                  </TableCell>
                  <TableCell className="p-4 text-right text-gray-900 font-semibold">
                    {item.totalBorrowed}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          No borrow records found.
        </div>
      )}
    </div>
  );
}

export default BorrowSummary;
