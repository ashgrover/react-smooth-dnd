import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { constants } from 'smooth-dnd-modified';
const { wrapperClass, nonDraggableClass } = constants;

export interface DraggableProps {
	render?: () => React.ReactElement;
	className?: string;
	canDrag?: boolean;
}

class Draggable extends Component<DraggableProps> {
	public static propsTypes = {
		render: PropTypes.func,
		className: PropTypes.string,
		canDrag: PropTypes.bool
	}

	render() {
		const dragItemClass = (this.props.canDrag == null || this.props.canDrag) ? wrapperClass : nonDraggableClass;

		if (this.props.render) {
			return React.cloneElement(this.props.render(), { className: dragItemClass });
		}

		const clsName = `${this.props.className ? (this.props.className + ' ') : ''}${dragItemClass}`;
		return (
			<div className={clsName}>
				{this.props.children}
			</div>
		);
	}
}

export default Draggable;