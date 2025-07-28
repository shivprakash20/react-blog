
import Counter from '../../components/Counter/Counter';
import UseStateComponent, { NumberCounter, TextInput, AcceptTerms, TodoList, DataLoader, 
  DatePicker, UppercaseInput, ToggleComponent, SelectCountry, Game} from '../../components/UseStateComponent/UseStateComponent';


const Main = () => {

  return (
    <main className="main-content">
      <Counter />

      <div className="counter-use-state">
        <div className='state-cards'><UseStateComponent /></div>
        <div className='state-cards'><NumberCounter /></div>
        <div className='state-cards'><TextInput /></div>
        <div className='state-cards'><AcceptTerms /></div>
        <div className='state-cards'><TodoList /></div>
        <div className='state-cards'><DataLoader /></div>
        <div className='state-cards'><DatePicker /></div>
        <div className='state-cards'><UppercaseInput /></div>
        <div className='state-cards'><ToggleComponent /></div>
        <div className='state-cards'><SelectCountry /></div>
        <div className='state-cards'><Game /></div>
      </div>
    </main>
  );
};

export default Main;
