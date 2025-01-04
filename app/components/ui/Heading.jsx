export default function Heading({ title }) {
  return (
    <h1 className="text-4xl font-bold dark:text-darkHeading text-lightHeading">
      {title}
    </h1>
  );
}
