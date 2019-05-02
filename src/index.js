import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import PaperSheet from './Paper';
import RecipeReviewCard from './Card';
import ButtonAppBar from './ButtonAppBar';
import SimpleLineChart from './SimpleLineChart';
import ControlledExpansionPanels from './ControlledExpansionPanels';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

const App = () => {
    const { todos, addTodo, deleteTodo } = useTodoState([]);

    useEffect(() => {
        console.log('Component App loaded');
        /*return () => {
            console.log('Component App useEffect left');
        };*/
    });

  return (
    <div className="App">
        <ButtonAppBar />
        <Grid container spacing={24}>
            <Grid item xs={2}>
                <TodoForm
                    saveTodo={todoText => {
                        const trimmedText = todoText.trim();

                        if (trimmedText.length > 0) {
                            addTodo(trimmedText);
                        }
                    }}
                />
            </Grid>
            <Grid item xs={5}>
                <SimpleLineChart />
                <p> </p>
                <ControlledExpansionPanels />
                <p> </p>
                <TodoList todos={todos} deleteTodo={deleteTodo} />
            </Grid>
            <Grid container item xs={5}>
                <Grid item xs={12}>
                    <PaperSheet />
                </Grid>
                <Grid item xs={7}>
                    <RecipeReviewCard />
                </Grid>
                <Grid item xs={5}>
                    <ControlledExpansionPanels />
                </Grid>
                <Grid item xs={12}>
                    <CardMedia
                        component="iframe"
                        height="240"
                        src="https://www.youtube.com/embed/akw0CRhaOaE"
                        title="Contemplative Reptile" />
                </Grid>

            </Grid>
        </Grid>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
