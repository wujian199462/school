package com.school.school.mapper;

import com.school.school.domain.Score;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ScoreMapper {
    int deleteByPrimaryKey(String stuno);

    int insert(Score record);

    int insertSelective(Score record);

    Score selectByPrimaryKey(String stuno);

    int updateByPrimaryKeySelective(Score record);

    int updateByPrimaryKey(Score record);

    Score getAllScoreByStuNo(String stuNo);
    List getAllScore(String stuNo);
}
