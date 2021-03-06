package nl.itopia.modwillie.core.service;

import java.security.Principal;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.itopia.modwillie.data.dao.UserDao;
import nl.itopia.modwillie.data.model.User;

/**
 * A CRUD service for the User model
 * @author Robin de Jong
 */
@Service
@Transactional
public class UserService {
	@Autowired
	private UserDao userDao;
	
	public void addUser(User user) {
		userDao.addUser(user);
	}
	
	public void updateUser(User user) {
		userDao.updateUser(user);
	}
	
	public void removeUser(User user) {
		userDao.removeUser(user.getId());
	}
	
	public User getUserWithName(String username) {
		return userDao.getUserWithName(username);
	}
	
	public User getUser(long id) {
		return userDao.getUser(id);
	}
	
	public List<User> getUsers() {
		return userDao.getUsers();
	}

	public User getUser(Principal principal) {
		return userDao.getUserWithName(principal.getName());
	}
}