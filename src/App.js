import './App.css';
import CommentDetail  from './CommentDetail'
import faker from 'faker';

const App = () => {
  return (
  <div className="ui container comments">
    <CommentDetail author="sam" date="Today at 1PM" text="hello" avatar={faker.image.avatar()}/>
    <CommentDetail author="alex" date="Today at 12PM" text="hi" avatar={faker.image.avatar()}/>
    <CommentDetail author="jane"date="Today at 3PM" text="welcome" avatar={faker.image.avatar()}/>
  </div>);
}

export default App;
