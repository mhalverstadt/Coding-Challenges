# Check your arrows
# You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
# You need to verify that you have some good ones left, in order to prepare for battle:

# anyArrows([{'range': 5}, {'range': 10, 'damaged': True}, {'damaged': True}])
# If an arrow in the quiver does not have a damaged status, it means it's new.

# The expected result is a boolean, indicating whether you have any good arrows left.

# Mine:
def any_arrows(arrows):
  return any(arrow.get('damaged', False) is False for arrow in arrows)


# Top solution: 
def any_arrows(arrows):
    return any(not i.get("damaged", False) for i in arrows)