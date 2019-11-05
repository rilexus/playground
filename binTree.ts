class TreeNode {
	value: any;
	left: TreeNode = null;
	right: TreeNode = null;
	
	constructor(value: any) {
		this.value = value;
	}
}

export class BinTree<Value>{
	root: TreeNode = null;
	constructor(){}
	
	/**
	 * Calls a callback on every node in tree in inOrder
	 * @param node
	 * @param callback
	 * @private
	 * @desc In order: left, root, right
	 */
	private _inOrder(node, callback){
		if (!node) return;
		this._inOrder(node.left, callback);
		callback(node);
		this._inOrder(node.right, callback);
	};
	/**
	 * Calls a callback on every node in tree in postOrder
	 * @param node
	 * @param callback
	 * @private
	 * @desc Post Order: left, right, root
	 */
	private _postOrder(node, callback){
		if (!node) return;
		this._postOrder(node.left, callback);
		this._postOrder(node.right, callback);
		callback(node);
	};
	
	/**
	 * Calls a callback on every node in tree in pre order
	 * @param node
	 * @param callback
	 * @private
	 * @desc Pre Order: root, left, right
	 */
	private _preOrder(node, callback){
		if (!node) return;
		callback(node);
		this._preOrder(node.left, callback);
		this._preOrder(node.right, callback);
	};
	
	private _appendToTree(node: TreeNode, toNode: TreeNode){
		if (!toNode){
			toNode = node;
			return;
		}
		if (!toNode.left && toNode.value > node.value) {
			toNode.left = node;
			return;
		}
		if (!toNode.right && toNode.value < node.value){
			toNode.right = node;
			return;
		}
		if (toNode.value > node.value){
			this._appendToTree(node, toNode.left);
		}
		if (toNode.value < node.value){
			this._appendToTree(node, toNode.right);
		}
	};
	
	
	private _count(node: TreeNode){
		let count = 0;
		this._preOrder(node, ()=> count++);
		return count
	}
	
	public count(){
		return this._count(this.root)
	}
	
	
	public insert(value: any){
		const node = new TreeNode(value);
		if (!this.root) {
			this.root = node;
			return
		}
		this._appendToTree(node, this.root);
	}
	
	public apply(callback){
		this._preOrder(this.root, callback)
	}
	
	private traverse(fromNode: TreeNode){
		let res = [];
		this._preOrder(fromNode, (node)=> res.push(node));
		return res;
	}
	
	public inOrder(){
		let res = [];
		this._inOrder(this.root,(node) => res.push(node.value));
		return res
	}
	
	
	
	public postOrder(){
		const res = [];
		this._postOrder(this.root, ({value}) => res.push(value))
		return res;
	}
	
	
	public preOrder(){
		const res = [];
		this._preOrder(this.root, ({value}) => res.push(value));
		return res;
	}
	
	public getValues(){
		return this.traverse(this.root).map(node => node.value);
	}
	
	private _contains(value:Value, node: TreeNode){
		if (!node) return false;
		if (node.value === value) return true;
		return this._contains(value, node.left) || this._contains(value, node.right)
		
	}
	
	public contains(value: Value) {
		return this._contains(value, this.root);
	}
	
	[Symbol.iterator]() {
		const treeValues = this.getValues();
		let idx = -1;
		return {
			next() {
				idx++;
				if (idx === treeValues.length) return {
					value: undefined,
					done: true
				};
				return {
					value: treeValues[idx],
					done: false
				}
			}
		}
	}
}

