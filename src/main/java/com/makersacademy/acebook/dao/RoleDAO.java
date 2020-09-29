package com.makersacademy.acebook.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.makersacademy.acebook.model.Role;

public interface RoleDAO extends JpaRepository<Role, String> {

}
