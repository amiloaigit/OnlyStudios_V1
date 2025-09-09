import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { studios } from '@/lib/mock-data';

export default function AdminDashboardPage() {
  const totalStudios = studios.length;
  const averagePrice = (
    studios.reduce((acc, studio) => acc + studio.price, 0) / totalStudios
  ).toFixed(2);
  const averageRating = (
    studios.reduce((acc, studio) => acc + studio.rating, 0) / totalStudios
  ).toFixed(2);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, Admin!</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Studios</CardTitle>
          </Header>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudios}</div>
            <p className="text-xs text-muted-foreground">
              Currently listed on the platform
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Price
            </CardTitle>
          </Header>
          <CardContent>
            <div className="text-2xl font-bold">${averagePrice}</div>
            <p className="text-xs text-muted-foreground">Per hour across all studios</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          </Header>
          <CardContent>
            <div className="text-2xl font-bold">{averageRating}</div>
            <p className="text-xs text-muted-foreground">
              Across all studios
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
