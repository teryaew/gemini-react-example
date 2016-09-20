import Button from '../src/button/button';

geminiReact.suite('button', function(suite) {
    suite.render(<Button view="action">Hey ho!</Button>)
        .capture('plain')
        .capture('hovered', function(actions) {
            actions.mouseMove(this.renderedComponent);
        })
});
