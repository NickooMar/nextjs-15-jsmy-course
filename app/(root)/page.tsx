import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export interface StartupCardType {
  _id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  _createdAt: string;
  views: number;
  author: {
    _id: number;
    name: string;
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = (await searchParams) || {};

  const posts = [
    {
      _id: 1,
      title: "We Robots",
      description: "This is description",
      image: "https://via.placeholder.com/150",
      category: "Robots",
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "John Doe",
      },
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          YC Directory is a platform for Y Combinator alumni to pitch their
          startups, connect with other entrepreneurs and grow their network
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Latest Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">
              No startups found for the search term. Please try a different
              search term.
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
