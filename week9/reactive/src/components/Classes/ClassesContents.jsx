import ClassesContentCard from "./ClassesContentCard";

function ClassesContents({ content }) {
  return (
    <div className="class-contents">
      <ClassesContentCard {...content} />
    </div>
  );
}
export default ClassesContents;
