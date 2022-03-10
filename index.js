const Button = (props) => {
  //  Write your code here.
  const { styling, content } = props;
  return <button className={styling}>{content}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div>
      <Button styling="like-button" content="Like" />
      <Button styling="comment-button" content="Comment" />
      <Button styling="share-button" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
