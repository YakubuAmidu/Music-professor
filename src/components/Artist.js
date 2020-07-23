import React, { Component } from 'react';

const Artist = ({ artist }) => {
  const { images, name, genres, followers } = artist;

  return (
      <div>
          <h3>{name}</h3>
          <p>{followers.total} followers</p>
      </div>
  )
}