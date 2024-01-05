type ReactCommentProps = {
  text: string;
};

const ReactComment = ({ text }: ReactCommentProps) => {
  return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />;
};

export default ReactComment;
