import React from "react";
import {
    ShallowComponent,
    Application
} from "robe-react-commons";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import modalConfirmMessages from "./formMessages.json"

Application.loadI18n(modalConfirmMessages);

export default class ModalConfirm extends ShallowComponent {

    static propTypes = {
        onOkClick: React.PropTypes.func,
        onCancelClick: React.PropTypes.func,
        header: React.PropTypes.string,
        message: React.PropTypes.string,
        show: React.PropTypes.bool,
        okButtonText: React.PropTypes.string,
        cancelButtonText: React.PropTypes.string,
    };


    static defaultProps = {
        okButtonText: Application.i18n("modalconfirm").ok,
        cancelButtonText: Application.i18n("modalconfirm").cancel,
    };

    render(): Object {
        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>{this.props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onCancelClick}>{this.props.cancelButtonText}</Button>
                    <Button bsStyle="danger" onClick={this.props.onOkClick}>{this.props.okButtonText}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
