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
		if (this.isEmpty() || !this.contains(data)) return;
		this.root = this.removeHelper(data, this.root);
		this.elemsCounter--;
	}

	removeHelper(data, node) {
		if (node) {
			if (data < node.data) {
				node.left = this.removeHelper(data, node.left);
			} else if (data > node.data) {
				node.right = this.removeHelper(data, node.right);
			} else if (node.left && node.right) {
				node.data = this.findMinData(node.right);
				node.right = this.removeHelper(node.data, node.right);
			} else {
				node = node.left || node.right;
			}
		}
		return node;
	}

	findMinData(node) {
		if (!this.isEmpty()) {
			if (node === 0) node = this.root;
			while (node.left) {
				node = node.left;
			}
			return node.data;
		}
	}

	size() {
		return this.elemsCounter;
	}

	isEmpty() {
		return this.root == null;
	}
}
