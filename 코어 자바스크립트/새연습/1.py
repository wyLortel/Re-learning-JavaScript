def isParenthesesValid(parentheses):
    # 関数を完成させてください
    arrow = {
      "}" : "{",
      "]" : "[",
      ")" : "(",
    }
    
    stack = []
    
    for i in parentheses:
      if i  in "{[(":
        stack.append(i)
      else:
        if not stack:
          return False
        if stack.pop() != arrow[i]:
            return False
      
      
    return len(stack) == 0
  
  


print(isParenthesesValid("{}"))