import Button from '../src/button/button';

geminiReact.suite('button', function(suite) {
    suite.render(<Button view="action">Hey ho!</Button>)
        .capture('plain')
        .capture('hovered', function(actions) {
            actions.mouseMove(this.renderedComponent);
        })
        .capture('pressed', function(actions) {
            actions.mouseDown(this.renderedComponent);
        })
        .capture('clicked', function(actions) {
            actions.click(this.renderedComponent);
        })
        .capture('focused', function(actions) {
            actions.mouseMove(this.renderedComponent);
        });
});
