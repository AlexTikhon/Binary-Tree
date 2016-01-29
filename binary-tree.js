'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.isEmpty()){
			this.root = new Node(data);
			return;
		}

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

			if (data == currNode.data) break;
		}
	}

	contains(data) {
		if (this.isEmpty()) return false;

		var result = false, currNode = this.root;

		while (!result && currNode) {

			if (data < currNode.data) {
				currNode = currNode.left;
			} else if (data > currNode.data) {
				currNode = currNode.right;
			} else if (data == currNode.data) {
				result = true;
			}

		}
		return result;
	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {
		return this.root == null;
	}
}
