'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
		this.elemsCounter = 0;
	}

	isNumeric(data) {
		return !isNaN(parseFloat(data)) && isFinite(data);
	}

	insert(data) {
		if ( !this.isNumeric(data) ) return;

		if (this.isEmpty()){
			this.root = new Node(data);
			this.elemsCounter++;
			return;
		}

		if ( this.contains(data) ) return;

		var currNode = this.root;

		while (currNode) {

			if (data < currNode.data) {
				if (currNode.left == null) {
					currNode.left = new Node(data);
					break;
				} else {
					currNode = currNode.left;
				}
			}

			if (data > currNode.data) {
				if (currNode.right == null) {
					currNode.right = new Node(data);
					break;
				} else {
					currNode = currNode.right;
				}
			}
		}
		this.elemsCounter++;
	}

	contains(data) {
		var result = false;

		if (this.isEmpty() && !this.isNumeric(data) ) return result;

		var currNode = this.root;

		while (!result && currNode) {

			if (data < currNode.data) {
				currNode = currNode.left;
			} else if (data > currNode.data) {
				currNode = currNode.right;
			} else {
				result = true;
			}

		}
		return result;
	}

	remove(data) {
		if ( this.isEmpty() || (!this.contains(data)) ) return;

		var currNode = this.root;
		var pointer = null;

		while (currNode) {
			if (currNode.data > data) {
				pointer = currNode;
				currNode = currNode.left;
			} else if (currNode.data < data) {
				pointer = currNode;
				currNode = currNode.right;
			} else {
				if (currNode.left != null && currNode.right != null) {
					if (pointer.left == currNode)
						pointer.left = currNode.left;
					else {
						pointer.right = currNode.right;
					}
					break;
				}
				if (currNode.right == null && currNode.left == null) {
					if (!pointer) {
						this.root = null;
					} else {
						if (pointer.left == currNode)
							pointer.left = null;
						else
							pointer.right = null;
					}
					break;
				}
				if (currNode.right == null && currNode.left != null ) {
					pointer.left = currNode.left;
					break;
				}
				if (currNode.left == null && currNode.right != null) {
					pointer.right = currNode.right;
					break;
				}
			}
		}
		this.elemsCounter--;
	}

	size() {
		return this.elemsCounter;
	}

	isEmpty() {
		return this.root == null;
	}
}
