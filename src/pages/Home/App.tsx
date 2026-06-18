import logo from '../../assets/logo.svg';
import './App.css';
import { useApp } from './hooks/useApp';
import Input from '../../components/Input/Input';
import TagList from '../../components/Modules/TagList/TagList';

function App() {
  const {
    value,
    tags,
    handleChange,
    handleEnterKey,
    handleRemove,
  } = useApp()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Input
          value={value}
          onChange={e => handleChange(e.target.value)}
          onKeyDown={handleEnterKey}
          placeholder='input your tag ...'
        />

        <TagList tags={tags} onRemove={handleRemove} />
      </header>
    </div>
  );
}

export default App;
