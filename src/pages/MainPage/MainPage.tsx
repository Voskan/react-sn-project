import PostCard from "@/components/shared/cards/PostCard";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="mt-4 flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-zinc-900 dark:text-zinc-100">
          <span className="md:h1-bold sm:h2-bold xs:h2-bold">
            Welcome to <span className="text-red-500">PlusDev</span>
            <span className="text-zinc-600">.NET</span>
          </span>
          <span
            className="flex font-space-grotesk-normal text-base font-normal
          uppercase tracking-wide text-zinc-600 dark:text-zinc-400"
          >
            The best place to learn and share
          </span>
        </h1>

        <div className="flex gap-4">
          <Link to="/create-post" className="flex justify-end">
            <Button className="btn-secondary min-h-[46px] px-4 py-3 text-zinc-50 max-sm:min-w-[150px]">
              Create a Post
            </Button>
          </Link>

          <Link to="/ask-question" className="flex justify-end">
            <Button className="btn-tertiary min-h-[46px] px-4 py-3 text-zinc-50 max-sm:min-w-[150px]">
              Ask a Question
            </Button>
          </Link>
        </div>
      </div>

      <div className="col-span-2 mt-12">
        <Link
          to="/posts"
          className="flex justify-end gap-3 text-sm font-bold uppercase text-red-500 hover:text-red-400"
        >
          View all posts <LucideArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <PostCard
          id="1"
          title="Why I love Next.js"
          url="/posts/1"
          image="https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60"
          cretedAt="1 day ago"
          commentsCount={10000000}
          viewsCount={100}
          author={{
            id: "1",
            name: "John Doe",
            image:
              "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fimage-store-test-123.s3.us-east-2.amazonaws.com%2Fe005fc772e8484dd32c3cb9ca454749a_pulsdev.png&w=32&q=50",
          }}
          tags={[
            {
              id: "1",
              name: "Next.js",
              url: "/tags/1",
            },
            {
              id: "2",
              name: "Node.js",
              url: "/tags/2",
            },
          ]}
          upvotesCount={10}
        />

        <PostCard
          id="1"
          title="Why I love Next.js"
          url="/posts/1"
          image="https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60"
          cretedAt="1 day ago"
          commentsCount={10}
          viewsCount={10000}
          author={{
            id: "1",
            name: "John Doe",
            image:
              "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fimage-store-test-123.s3.us-east-2.amazonaws.com%2Fe005fc772e8484dd32c3cb9ca454749a_pulsdev.png&w=32&q=50",
          }}
          tags={[
            {
              id: "1",
              name: "Next.js",
              url: "/tags/1",
            },
            {
              id: "2",
              name: "Node.js",
              url: "/tags/2",
            },
          ]}
          upvotesCount={10}
        />

        <PostCard
          id="1"
          title="Why I love Next.js"
          url="/posts/1"
          image="https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60"
          cretedAt="1 day ago"
          commentsCount={10}
          viewsCount={100}
          author={{
            id: "1",
            name: "John Doe",
            image:
              "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fimage-store-test-123.s3.us-east-2.amazonaws.com%2Fe005fc772e8484dd32c3cb9ca454749a_pulsdev.png&w=32&q=50",
          }}
          tags={[
            {
              id: "1",
              name: "Next.js",
              url: "/tags/1",
            },
            {
              id: "2",
              name: "Node.js",
              url: "/tags/2",
            },
          ]}
          upvotesCount={10}
        />

        <PostCard
          id="1"
          title="Why I love Next.js"
          url="/posts/1"
          image="https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60"
          cretedAt="1 day ago"
          commentsCount={10}
          viewsCount={100}
          author={{
            id: "1",
            name: "John Doe",
            image:
              "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fimage-store-test-123.s3.us-east-2.amazonaws.com%2Fe005fc772e8484dd32c3cb9ca454749a_pulsdev.png&w=32&q=50",
          }}
          tags={[
            {
              id: "1",
              name: "Next.js",
              url: "/tags/1",
            },
            {
              id: "2",
              name: "Node.js",
              url: "/tags/2",
            },
          ]}
          upvotesCount={10}
        />
      </div>
    </>
  );
};

export default MainPage;
