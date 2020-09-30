function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Type Below...</h5>
                <form>
                    <input type="text"  class="form-control" placeholder="Message" name="message"/>
                    <input type="submit" name="login" class="login login-submit" value="Post!"/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Post!</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Make a new post
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

render(<App />);