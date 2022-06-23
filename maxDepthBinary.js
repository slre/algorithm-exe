/*Definition for a binary tree node.
function TreeNode(val) {
   this.val = val; this.left = this.right = null;
  param TreeNode) root return number
} */
const maxDepth = (root) => {
    let maxDepth = 0; 
    let BFS = (node, level) => {
        if (node === null) return 
        if (level > maxDepth) maxDepth = level; 
        BFS(node.left, level + 1) 
        BFS(node.right, level + 1)
    }
    BFS(root, 1); 
    return maxDepth;
}   