import './App.css';
import CommentDetail  from './CommentDetail'

const App = () => {
  return (
  <div className="ui container comments">
    {CommentDetail()}
    {CommentDetail()}
    {CommentDetail()}
  </div>);
}

export default App;
