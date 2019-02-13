package com.school.school.mapper;

import com.school.school.domain.Teacher;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
@Mapper
@Repository
public interface TeacherMapper {
    int deleteByPrimaryKey(String id);

    int insert(Teacher record);

    int insertSelective(Teacher record);

    Teacher selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Teacher record);

    int updateByPrimaryKey(Teacher record);

    List<Teacher> getAllTeacher();
}
