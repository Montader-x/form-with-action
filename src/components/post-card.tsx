import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PostProps {
  title: string;
  content: string;
}

export const PostCard = ({ title, content }: PostProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader className="w-72">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardHeader>
    </Card>
  );
};
